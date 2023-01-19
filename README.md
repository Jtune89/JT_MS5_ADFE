<img width="643" alt="logo" src="https://user-images.githubusercontent.com/95533259/213480611-0d2cd373-9949-4053-bd6e-2e1e788c8185.png">

# Shared is a photo sharing site which allows users to create an account, post their pictures with comments, follow other users as well as like and comment on other users posts.  It is aimed at the general public who wish to share their precious moments, forever capturing those as memories and can come back to relive those memories on their page.


## Functionality that exists on the site:

- Create Account
- Log In / Out
- Create posts with image upload and caption
- Retrieve posts via their own profile
- Edit those posts after posting
- Delete those posts after posting
- Comment on their own/other users posts
- Like other users posts
- Follow other users
- Edit their profile including bio/profile image/username/password
- Delete their profile if they no longer which to use the site


### The site has multiple useable pages within it:

<img width="1512" alt="Screenshot 2023-01-19 at 16 33 14" src="https://user-images.githubusercontent.com/95533259/213499546-7fa8669f-3858-49b2-8d83-15e982ef9110.png">

- Home page: shows all posts by all users where the user is signed in or not
- Sign in page: allows existing users to sign in
- Register page: allowes new users to join the site

#### Once Signed in a user will then see:

<img width="1512" alt="Screenshot 2023-01-19 at 16 31 43" src="https://user-images.githubusercontent.com/95533259/213499245-4210dad1-7aaa-4130-8095-2268001c63f7.png">

- Home - as described above
- Feed - posts from users that they are following
- Liked - posts that the user has liked
- Commented - posts that the user has commented on
- Activity - this is a list of the Users posts that have been commented on by other users
- Sign Out - allows the user to sign out and re-directs them back to the home page
- Your Profile - allows the user to see their own profile, with their own posts and allows them to edit their profile
- Add Post - allows the user to create a new post to add to their profile and share with their followers

### Post Functionality:

<img width="1512" alt="Screenshot 2023-01-19 at 16 35 50" src="https://user-images.githubusercontent.com/95533259/213500210-b963a54b-190e-4bd8-bc6f-5b6aeaa040d5.png">

When adding a new post a user can upload an image, give it a title and give it some caption content to let their follows know what is happening in this memory.  This post will then be visible within their profile, on the home page and also in the feed of their followers.

<img width="926" alt="Screenshot 2023-01-19 at 16 38 31" src="https://user-images.githubusercontent.com/95533259/213501884-086dbb29-fed2-48c8-b061-28348428330f.png">

When the post is visible on the feed of their followers, people can like the post or add comments to the post.

If the post creater wishes, they have the option of deleting or updating their post as required.

### Profile Functionality

A user has the option of:
- updating their username
- updating their password
- changing their profile picture
- updating their BIO
- deleting their profile

<img width="992" alt="Screenshot 2023-01-19 at 16 41 26" src="https://user-images.githubusercontent.com/95533259/213503577-043452d2-be0a-42a8-9436-b1e27638eb6b.png">

### Followers Functionality

As with any social media platform, the need to consume content from the users someone followers is the most important need.  A user has the ability to see most popular profiles, follow those profiles, find posts within the home page and follow those profiles.  A user also has the option to unfollow people if they so choose.

A user can find content all over the site and engage with followers and the people they follow.

<img width="412" alt="Screenshot 2023-01-19 at 16 44 34" src="https://user-images.githubusercontent.com/95533259/213504330-01e83920-ca9e-4d4f-9abc-403e11ae32d9.png">

-----------------------------------------------------------------------------------------------------------------------------------------------------------
## User Stories > Build > Testing > Deployment

<img width="943" alt="Screenshot 2023-01-19 at 17 42 03" src="https://user-images.githubusercontent.com/95533259/213520112-27400bff-e769-436f-8b67-e589e167d0ab.png">

#### User Stories / Build:

I used the Code Institute Moments walkthrough as the basis for the code and then built and developed additional functionality from there.

I started by identifying what I believe my users want, they want:
- content
- engagement
and so I built the commented/activity pages so that a user can engage directly with people.  They can see if anyone else is commenting back to them on other users posts and they can see the same on their own posts.

The user stories outline how a user wants to interact with the site and I used Agile Kanban to work through those stories and allow work to move right across the board.

This was dealt with in sprints consisting of 1 day.  I may focus on profile element on one day and comments/likes on another day.

#### BackEnd Build:

The backend build of the site was developed using the Django REST Framework walkthrough provided by Code Institute which I then built additional functionality into to handle additional filtering requirements and profile deletion.  

The backend handles:
- User Profiles
- Posts
- Comments
- Likes
- Followers
- Profile Editing
- Profile Deletion
- Filtering logic for various pages on the site


#### Testing:

I built automated testing within the code for the navbar however I experienced a number of issues relating to Axios in the code base which prevented me from completing the automated testing.

I therefore implemented wide ranging manual testing on both the workspace and the deployed site on Heroku.

#### Testing Stories:

I created a number of new users in order to complete the testing.  Functionality tested included:
- Follow / unfollow
- adding comments / deleting comments
- adding likes / unliking
- deleting the profile
- signing in and signing out
- ensuring posts appear in the appropriate pages based on the logic
- editing the username
- editing the password
- adding & removing profile images
- adding & removing posts

### Testing Issues:
- I found inconsistencies in the CSS formatting of buttons throughout the site and so implemented fixes on the CSS
- The automated Axios testing required an update to the package.Json file
- When I deployed the site, I found that a user that was not logged in could not see any of the posts on the home page or the user profiles.  This was due to the tokens settings which I needed to re-implement.

## Am I responsive:

As you can see from the below, the site is responsive across all screen sizes with a burger menu implemented for mobile screen sizes

<img width="1141" alt="Screenshot 2023-01-19 at 17 03 24" src="https://user-images.githubusercontent.com/95533259/213511782-40a69d0e-9751-4f26-acfe-823948466e7b.png">

## Lighthouse:
<img width="555" alt="Screenshot 2023-01-19 at 17 06 32" src="https://user-images.githubusercontent.com/95533259/213512330-7260fd5d-c09f-4a34-b63e-d7aae535c6e5.png">

Lighthouse shows an excellent accessibility score which is key for users with vulnerabilities or specific needs.
Performance could be better on here which is something we would address in the next iteration of the site.

### Deployment:

Deployment was completed using:
- The DRF-API Django backend that I had created to handle the backend functionality - deployed to Heroku
- React Front End - deployed to heroku
- 

#### Deployment Issues:

When attempting to deploy the site, I found that the config vars for the backend DRF-API were not set up to handle the deployment which I subsequently corrected and successfully deployed the site to Heroku.

When I deployed the site to Heroku, it was clear that a user that was not logged in could not see the site pages.  This was due to the access token set up which needed to be corrected (found as part of deployment testing outlined above).

Once this fix was implemented I was able to deploy the site again successfully.




