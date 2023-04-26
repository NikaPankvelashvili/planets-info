export interface DetailedInfo {
  content: string,
  source: string
}

interface Images {
  geology: string,
  internal: string,
  planet: string,
}

export default interface PlanetData {
  name: string,
  radius: string,
  revolution: string,
  rotation: string,
  temperature: string,
  geology: DetailedInfo,
  images: Images,
  overview: DetailedInfo,
  structure: DetailedInfo,
}