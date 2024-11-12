// src/graphql/queries.ts
import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  query getEvents {
    getEvents {
      id
      title
      date
      description
      location
    }
  }
`;

export const GET_BOOKMARKS = gql`
  query getBookmarks {
    getBookmarks {
      id
      title
      date
      description
      location
    }
  }
`;
