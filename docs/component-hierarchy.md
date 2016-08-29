**Header**
- AuthForm
 + SignUpForm
 
**SignUpForm**

**HomeContainer**
- Home
- Navbar


**MixContainer**
  - MixDetail

**MixIndex**
 - MixIndexItem
  - Mix

**Search**

**SearchResultsContainer**

**TagContainer**

**NewMixContainer**


 ## Routes

 |Path   | Component   |
 |-------|-------------|
 | "/sign-up" | "AuthFormContainer" |
 | "/sign-in" | "AuthFormContainer" |
 | "/home" | "HomeContainer" |
 | "/home/user/:mixId" | "MixesContainer" |
 | "/home/tag/:tagId/mix/:mixId" | "TagContainer" |
 | "/home/search-results" | "SearchResultsContainer"
 | "/new-mix" | "NewMixContainer" |
 | "/search" | "Search" |
