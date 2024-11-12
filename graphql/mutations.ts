import { gql } from "@apollo/client";

export const ADD_BOOKMARK = gql`
  mutation addBookmark($eventId: ID!) {
    addBookmark(eventId: $eventId) {
      id
      title
      date
      description
      location
    }
  }
`;

export const REMOVE_BOOKMARK = gql`
  mutation removeBookmark($eventId: ID!) {
    removeBookmark(eventId: $eventId) {
      id
      title
      date
      description
      location
    }
  }
`;
