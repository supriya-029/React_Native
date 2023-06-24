REGISTRATION FORM
A React Native application with two pages.

Page 1
It consists of 4 text fields, 1 date picker, and a button

1. First Name
2. Second Name
3. Date of Birth
4. Occupation
5. Company

When the user presses the button, the captured details should be pushed to Firebase Firestore and navigate to page 2.
Page 2

It displays a string as follows :

(First Name + Last Name) is (age) years old and working as a (occupation) in (company).

To install React Native, you need to follow a series of steps:

Install the React Native CLI by running the following command in your terminal:
npm install -g react-native-cli
Create a new React Native project by running the following command:
npx react-native init YourProjectName
Change to the project directory:
cd YourProjectName
Connect your Android or iOS device, or set up an emulator/simulator for testing.

For Android:

Make sure you have Java Development Kit (JDK) installed on your system. You can download it from the Oracle website.
Configure the environment variables JAVA_HOME and ANDROID_HOME to point to the JDK and Android SDK directories, respectively.
Run the following command to start the Android app:
arduino
npx react-native run-android

For iOS:

Install Xcode from the Mac App Store if you don't have it already.
Run the following command to start the iOS app:
arduino

npx react-native run-ios
These steps will set up a basic React Native project on your machine. From there, you can start building your application by editing the files in the project directory.

To set up a Firebase project, follow these steps:

Go to the Firebase website: Visit the Firebase website at https://firebase.google.com/.

Sign in or create an account: Sign in with your Google account or create a new account if you don't have one.

Create a new project: Click on "Get Started" and then "Add project" to create a new Firebase project.

Provide project details: Enter a name for your project and optionally choose a project ID. Ensure the project ID is unique across all Firebase projects.

Enable Google Analytics (optional): If you want to use Google Analytics with your Firebase project, you can enable it during the project setup process.

Accept Firebase terms: Read and accept the terms and conditions for Firebase.

Configure Google Analytics (optional): If you enabled Google Analytics, you'll be prompted to choose an account for analytics data collection. Select the appropriate account or create a new one.

Access your Firebase project: Once the project is created, you'll be redirected to the Firebase console, where you can access your project settings and features.

Set up Firebase SDK: In your project dashboard, click on the "Web" icon (</>) to add a web app to your project. Provide a nickname for your app and click "Register app". You'll be provided with Firebase configuration code (apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId). Keep this configuration code handy as you'll need it in your React Native application.

Install Firebase CLI (optional): If you want to use Firebase CLI for deployment, hosting, or other advanced features, you can install it by following the instructions provided in the Firebase console.