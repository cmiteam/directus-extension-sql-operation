import { defineOperationApi } from '@directus/extensions-sdk'

type Options = {
  query: string
  parameters: Record<string, string | number | undefined>
}

export default defineOperationApi<Options>({
  id: 'sql-operation',
  handler: ({ query, parameters }, { database }) => {
    return database.raw(query, parameters)
  },
})
