DROP TABLE IF EXISTS projects CASCADE;
CREATE TABLE projects (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP default now(),
  updated_at TIMESTAP default now()
);