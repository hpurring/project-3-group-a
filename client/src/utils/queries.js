import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      username
      _id
      email
      cards {
        firstName
        lastName
        pronouns
        title
        company
        email
        phone
        linkedIn
        website
        instagram
        avatar
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($_id: ID!) {
    user(_id: $_id) {
      _id
      username
      email
      cards {
        firstName
        lastName
        pronouns
        title
        company
        email
        phone
        linkedIn
        website
        instagram
        avatar
      }
    } 
  }
`;

export const QUERY_ME = gql`
  query {
    me {
      _id
      username
      email
      contacts {
        username
        _id
        email
        cards {
          firstName
          lastName
          pronouns
          title
          company
          phone
          linkedIn
          website
          instagram
          avatar
        }
      }
      cards {
        firstName
        lastName
        pronouns
        title
        company
        email
        phone
        linkedIn
        website
        instagram
        avatar
      }
    }
  }
`;


