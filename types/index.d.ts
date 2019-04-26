/* eslint-disable import/export */
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.css' {
  const css: any;
  export default css;
}
