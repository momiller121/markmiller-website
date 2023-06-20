import { env } from '$env/dynamic/private';
import { Client } from '@notionhq/client';
import type {
    PageObjectResponse,
    //   GetPageResponse,
    //   GetPagePropertyResponse,
    //   ListBlockChildrenResponse,
    QueryDatabaseParameters,
    //   GetBlockResponse,
} from '@notionhq/client/build/src/api-endpoints';

const BLOG_DATABASE_ID = env.NOTION_BLOG_DATABASE_ID as string;

const notion = new Client({
    auth: env.NOTION_CONTENT_READ_SECRET,
})

export const getPosts = async () => {

    const queryOptions: QueryDatabaseParameters = {
        database_id: BLOG_DATABASE_ID,
        page_size: 50,
        filter: {
            and: [
                {
                    property: 'Date',
                    date: {
                        is_not_empty: true,
                    },
                },
                {
                    property: 'Date',
                    date: {
                        on_or_before: new Date().toISOString(),
                    },
                },
                {
                    property: 'isPublished',
                    checkbox: {
                        equals: true
                    }
                }
            ],
        },
        sorts: [
            {
                property: 'Date',
                direction: 'descending',
            },
        ],
    }

    const database = await notion.databases.query(queryOptions);

    const pageIds: string[] = database.results.map((result: any) => result.id);
    const properties = (database.results[0] as PageObjectResponse).properties;

    return {
        pageIds,
        properties,
    };
}


// import { Client } from '@notionhq/client';
// import { BlogPropertyKeys } from 'src/types/notion';

// import type {
//   PageObjectResponse,
//   GetPageResponse,
//   GetPagePropertyResponse,
//   ListBlockChildrenResponse,
//   QueryDatabaseParameters,
//   GetBlockResponse,
// } from '@notionhq/client/build/src/api-endpoints';
// import type { NotionBlogProperties, Database } from 'src/types/notion';
// import isProduction from '@/utils/env';

// const notion = new Client({
//   auth: process.env.NOTION_AUTH_TOKEN,
// });

// export default notion;

// const BLOG_DATABASE_ID = process.env.NOTION_BLOG_DATABASE_ID as string;

// export async function getPage(page_id: string): Promise<GetPageResponse> {
//   const pages = await notion.pages.retrieve({ page_id });

//   return pages;
// }

// export async function getPageProperty(page_id: string, property_id: string): Promise<GetPagePropertyResponse> {
//   const property = notion.pages.properties.retrieve({ page_id, property_id });

//   return property;
// }
// export async function getPageProperties(page_id: string, propertyIds: string[]): Promise<GetPagePropertyResponse[]> {
//   const pageProperties = await Promise.all(
//     propertyIds.map((propertyId: string) => getPageProperty(page_id, propertyId))
//   );

//   return pageProperties;
// }

// export async function getBlock(block_id: string): Promise<GetBlockResponse> {
//   const block = await notion.blocks.retrieve({
//     block_id,
//   });

//   return block;
// }

// export async function getBlocks(block_id: string, start_cursor?: string): Promise<ListBlockChildrenResponse> {
//   const blocks = await notion.blocks.children.list({
//     block_id,
//     page_size: 100,
//     start_cursor,
//   });

//   return blocks;
// }

// export async function getAllPublishedBlogPosts(): Promise<Database> {
//   const prodOptions: QueryDatabaseParameters = {
//     database_id: BLOG_DATABASE_ID,
//     page_size: 50,
//     filter: {
//       and: [
//         {
//           property: BlogPropertyKeys.Published,
//           date: {
//             is_not_empty: true,
//           },
//         },
//         {
//           property: BlogPropertyKeys.Published,
//           date: {
//             on_or_before: new Date().toISOString(),
//           },
//         },
//       ],
//     },
//     sorts: [
//       {
//         property: BlogPropertyKeys.Published,
//         direction: 'descending',
//       },
//     ],
//   };

//   const devOptions: QueryDatabaseParameters = {
//     database_id: BLOG_DATABASE_ID,
//     page_size: 50,
//     sorts: [
//       {
//         property: BlogPropertyKeys.Updated,
//         direction: 'descending',
//       },
//     ],
//   };

//   const options = isProduction() ? prodOptions : devOptions;

//   const database = await notion.databases.query(options);

//   const pageIds: string[] = database.results.map((result: any) => result.id);
//   const properties = (database.results[0] as PageObjectResponse).properties as NotionBlogProperties;

//   return {
//     pageIds,
//     properties,
//   };
// }

// export async function getAllBlogPostTags(): Promise<Database> {
//   const database = await notion.databases.query({
//     database_id: BLOG_DATABASE_ID,
//     page_size: 50,
//     filter: {
//       and: [
//         {
//           property: BlogPropertyKeys.Published,
//           date: {
//             is_not_empty: true,
//           },
//         },
//         {
//           property: BlogPropertyKeys.Tags,
//           multi_select: {
//             is_not_empty: true,
//           },
//         },
//       ],
//     },
//     sorts: [
//       {
//         property: BlogPropertyKeys.Published,
//         direction: 'descending',
//       },
//     ],
//   });

//   const pageIds: string[] = database.results.map((result: any) => result.id);
//   const properties = (database.results[0] as PageObjectResponse).properties as NotionBlogProperties;

//   return {
//     pageIds,
//     properties,
//   };
// }
