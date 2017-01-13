import gql from 'graphql-tag';

export default gql`
  mutation loginUser($input: LoginUserInput!){
    loginUser(input: $input) {
      token,
      user {
        id,
        username
      }
    }
  }
`;
