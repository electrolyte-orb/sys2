export default function parseURL(url: string) {
   let parsedSegment = url.split('/')[1];
   return parsedSegment;
}
