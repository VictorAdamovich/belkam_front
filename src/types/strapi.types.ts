export type StrapiReqType<T>={
  data: T
  meta: MetaType,
}

export type DataType<J>={
  id: number
  attributes: J
}

type MetaType={
  pagination: PaginationType
}

type PaginationType={
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export type DefaultAttributesType={
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type ImageURLDataType={
  data: ImageURLType
}

export type ImageArrURLDataType={
  data: ImageURLType[]
}

export type ImageURLType={
  id: number
  attributes: ImageURLAttributesType
}

export type ImageURLAttributesType={
  name: number
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats: FormatsType
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string
  provider: string
  provider_metadata: string
  createdAt: string
  updatedAt: string
}

export type FormatsType ={
  thumbnail: ThumbnailType
  small?: ThumbnailType
}

export type ThumbnailType={
  name: string
  hash: string
  ext: string
  mime: string
  path: string
  width: number
  height: number
  size: number
  url: string
}
