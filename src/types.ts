import type { GetProjectsQuery } from './graphql/generated'

export type Projects = GetProjectsQuery['project']
export type Project = Projects[number]
export type Technology = Project['technologies'][number]
