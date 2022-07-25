import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
query {
    repositroies {
        edges {
            node {
                id
                name
                ownerName
                createdAt
                fullName
                reviewCount
                ratingAverage
                forksCount
                startgazersCount
                description
                language
                ownerAvatarUrl
            }
        }
    }
}
`
