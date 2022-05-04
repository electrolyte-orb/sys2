export default function parseURL(url: string) {
   let parsedSegment = url.split('/')[1];
   console.log('parsed segment: ', parsedSegment);
   return parsedSegment;
}
