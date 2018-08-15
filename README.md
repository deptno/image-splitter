# image-splitter
[![npm](https://img.shields.io/npm/dt/image-splitter.svg?style=for-the-badge)](https://www.npmjs.com/package/image-splitter)

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
