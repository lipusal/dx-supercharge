declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}

declare module "*.css" {
  const content: undefined;
  export default content;
}

declare module "*.svg" {
  const url: string;
  export default url;
}
