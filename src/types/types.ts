export interface ArtPieceInfo {
  title: string;
  artist: string;
  image_id: string;
  date_start: string;
  date_end: string;
  nationality: string;
  dimensions: string;
  credit_line: string;
  repository: string;
  is_public: boolean;
}

export interface ArtPieceInfoBasic {
  title: string;
  artist: string;
  image_id: string;
  is_public: boolean;
}
