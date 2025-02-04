# NextAuth Session Undefined in getServerSideProps

This repository demonstrates a bug where the NextAuth session is undefined in `getServerSideProps` when using `unstable_getServerSession`.  Even after successful login, the session object remains null.

## Bug Reproduction

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Attempt to access the protected page.  The session will be logged as null, demonstrating the issue.

## Solution

The solution involves using `getServerSideProps` correctly with `unstable_getServerSession`, ensuring that the function is correctly structured to return the session data to the page component.