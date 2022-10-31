### 🔖Steps to Contribute

Following are the steps to guide you:

* Step 1: Fork the repo, and go to your Git terminal and clone it on your machine.

* Step 2: Add an upstream link to the main branch in your cloned repo
    ```
    git remote add upstream https://github.com/Subham-Maity/StockOfSentence.git
    ```
* Step 3: Keep your cloned repo up to date by pulling from upstream (this will also avoid any merge conflicts while committing new changes)
    ```
    git pull upstream main
    ```
* Step 4: Create your feature branch (This is a necessary step, so don't skip it)
    ```
    git checkout -b <feature-name>
    ```
* Step 5: Commit all the changes (Write commit message as "Small Message")
    ```
    git commit -m "Write a meaningful but small commit message"
    ```
* Step 6: Push the changes for review
    ```
    git push origin <branch-name>
    ```
* Step 7: Create a PR on Github. (Don't just hit the create a pull request button, you must write a PR message to clarify why and what are you contributing)