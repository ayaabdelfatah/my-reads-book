import { ImageLinks } from "./ImageLinksType";
import { IndustryIdentifier } from "./IndustryIdentifierType";
import { PanelizationSummary } from "./PanelizationSummaryType";
import { ReadingModes } from "./ReadingModesType";

export interface BookType {
  id: string;
  title: string;
  subtitle?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  industryIdentifiers?: IndustryIdentifier[];
  readingModes?: ReadingModes;
  pageCount?: number;
  printType?: string;
  categories?: string[];
  averageRating?: number;
  ratingsCount?: number;
  maturityRating?: string;
  allowAnonLogging?: boolean;
  contentVersion?: string;
  panelizationSummary?: PanelizationSummary;
  imageLinks?: ImageLinks;
  language?: string;
  previewLink?: string;
  infoLink?: string;
  canonicalVolumeLink?: string;
  shelf?: string;
}

export default BookType;