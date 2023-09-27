# johns-predictions

This is the readme. Read.
A web app to create a yearly predictions quiz. Users can submit and view their answers. Admins can create new prediction quizzes.

### About
Stack - Mongodb, Express, React Node
Hosting - Digital Ocean, Mongdb Atlas 

### Usage

#### Prospectives
Prospectives represent a set of questions
1. Create a prospective:
  - Click on the "Prospectives" tab
  - Click the "add new" button
  - Enter a title for your prospective and click "Ok"
2. View and manage your prospectives
  - Click on the "Prospectives" tab
  - Here you can see a list of your prospectives
  - Click on the prospective to edit its details or delete it.

#### Questions
Questions are linked to a prospective
1. Add questions to a prospective
  - Click on the "Prospectives" tab
  - Select the prospective you want to add a question to
  - Click the "Add question" button
  - Enter the question text
  - Add options
  - When you are finished click "Add question"
2. View and edit questions
  - Click "edit" next to the question you want to edit
  - You can now add an answer from the options

#### Predictions
Predictions are the answers users give for each question
1. Submitting a predictions
  - First you must edit the prospective and check "publish"
  - Click on the "predictions" tab
  - Click "submit predictions" for the prospective you want to submit
  - Select your answers and click "Submit your questions"
2. Edit your predictions
  - Users are free to edit their predictions as long as the prospective is published and not closed
3. Viewing your predictions
  - First edit the prospective and check "closed"
  - Click on the "predictions" tab
  - Click "See predictions"
  - Check your predictions agains the answers and other users
