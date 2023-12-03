import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['ID']['output'];
  isMain: Scalars['Boolean']['output'];
  project: Project;
  projectId: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export type Project = {
  __typename?: 'Project';
  description: Scalars['String']['output'];
  endDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  images: Array<Image>;
  name: Scalars['String']['output'];
  startDate: Scalars['Date']['output'];
  status: ProjectStatus;
  statusId: Scalars['Int']['output'];
  technologies: Array<Technology>;
};

export type ProjectStatus = {
  __typename?: 'ProjectStatus';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  projects: Array<Project>;
};

export type Query = {
  __typename?: 'Query';
  project: Array<Project>;
};

export type Technology = {
  __typename?: 'Technology';
  id: Scalars['ID']['output'];
  isMain: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  projects: Array<Project>;
  type: TechnologyType;
  typeId: Scalars['Int']['output'];
};

export type TechnologyType = {
  __typename?: 'TechnologyType';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  technologies: Array<Technology>;
};

export type GetProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProjectsQuery = { __typename?: 'Query', project: Array<{ __typename?: 'Project', id: string, name: string, description: string, startDate: any, endDate?: any | null, status: { __typename?: 'ProjectStatus', id: string, name: string }, technologies: Array<{ __typename?: 'Technology', id: string, name: string, type: { __typename?: 'TechnologyType', id: string, name: string } }>, images: Array<{ __typename?: 'Image', id: string, url: string, isMain: boolean }> }> };


export const GetProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"technologies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"isMain"}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectsQuery, GetProjectsQueryVariables>;