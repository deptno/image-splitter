import * as sharp from 'sharp';

export const splitIfWidthBiggerThenHeight =
    async (ext: string, stream: NodeJS.ReadableStream, rightFirst?: boolean): Promise<NodeJS.ReadableStream[]> => {
        const pipeline = sharp();

        try {
            stream.pipe(pipeline);
            const {width, height} = await pipeline.metadata();

            if (width > height) {
                const half = Math.floor(width / 2);
                const leftPage = pipeline.clone().extract({left: 0, top: 0, width: half, height});
                const rightPage = pipeline.clone().extract({left: half, top: 0, width: half, height});

                if (!rightFirst) {
                    return [leftPage, rightPage];
                } else {
                    return [rightPage, leftPage];
                }
            } else {
                return [pipeline.clone()];
            }
        } catch (message) {
            throw new Error(JSON.stringify({message}));
        }
    };
