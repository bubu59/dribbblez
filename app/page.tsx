import { ProjectInterface } from '@/common.types'
import { fetchAllProjects } from '@/lib/actions'

type SearchParams = {
  category?: string | null;
  endcursor?: string | null;
}

type Props = {
  searchParams: SearchParams
}

type ProjectsSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[]
    pageInfo: {
      hasPreviousPage: boolean,
      hasNextPage: boolean,
      startCursor: string,
      endCursor: string
    }
  }
}

const Home = async ({ searchParams: { category, endcursor } }: Props) => {

  const data = await fetchAllProjects(category, endcursor) as ProjectsSearch
  
  return (
    <section className='flex-start flex-col paddings mb-16'>
        <h1>Categories</h1>
        <h1>Posts</h1>
        <h1>Load MOre</h1>
    </section>
  )
}

export default Home