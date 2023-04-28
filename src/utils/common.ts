export const imageUrl = (name: string) => {
    return import.meta.env.VITE_PUBLIC_BASE_IMAGE_URL + '/' + name
  }  