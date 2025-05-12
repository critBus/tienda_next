export interface ProductAvailabilityDTO {
  id: number;
  productId: number;
  provinceId: number | null;
  municipalityId: number | null;
  townId: number | null;
  createdAt: Date;
}
