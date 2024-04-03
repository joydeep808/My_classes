I was a fine developer
I had avoided web development as the wild-West style craziness of the web dev libraries and modules and cross-compatibility between them all intimidated me a little, i understood web dev was about finding libraries and frameworks that are compatible with one another, a single library with the wrong version could lead you to version correction deadlock where you infinitely correct the versions of modules until you decide to write from scratch

Due to my friend's request, I picked up web dev again going back to the horror days of using react for the first time 2 years ago, luckily I did well enough this time and found it slightly easier, but then I came across "next-auth", next auth is a library that was recommended to me by a website to easily handle authentication but little did I know how I would regret this decision, while next auth does in some words make it easier to add authentication, it adds such a layer of abstraction even simple concepts about JWT and sessions seem in mystery, and the minimal amount of control I had while using next-auth with type script I just kept making interfaces upon interfaces upon interfaces 

I have decided to throw away this charade of abstraction and make my own auth logic, it can be tough and I probably won't know all the things I will need to implement, but I need answers, answers to WHY DOESN'T NEXT AUTH AUTOMATICALLY SET THE SESSION DATA VALUES BASED ON THE USER PASSED TO IN IN THE CREDENTIALS PROVIDER 

will purge next-auth
