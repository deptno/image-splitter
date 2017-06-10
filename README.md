# image-splitter

## install

```bash
npm install --save image-splitter

```

## api

> splitIfWidthBiggerThenHeight: (ext: string, stream: NodeJS.ReadableStream, rightFirst?: boolean) => Promise<NodeJS.ReadableStream[]>;

```typescript
import {splitIfWidthBiggerThenHeight} from 'image-splitter';

axios({url: 'https://image.url.jpg', responseType: 'stream'})
    .then(response => splitIfWidthBiggerThenHeight('.jpg', response.data));
```
