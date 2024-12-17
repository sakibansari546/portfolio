// TypeScript types for the models
export type ProjectType = {
  id: string;
  name: string;
  short_desc: string;
  description: string | null;
  image: string;
  created_by: string;
  technologyId: string;
  technology: TechnologyType;
  createdAt: Date;
  updatedAt: Date;
};

export type TechnologyType = {
  id: string;
  backend: string[];
  frontend: string[];
  Project?: ProjectType | null;
};
