
## Understanding Git
- Git is a distributed version control system that tracks versions of files. It is often used to control source code by programmers who are developing software collaboratively.

---

## Commands
- `git remote set-url origin git@github.com:YourUsername/your-repo-name.git`
	-  This command is used to set up SSH authentication between the machine you're using and your repo in github. You will need to run this command once for every repo on the system. The repo **HAS** to be setup in Github before this will work correctly. For setting up ssh on Github from scratch, see [[Github: SSH Setup]]

- `git remote -v` - Use this command as a sanity check for the above. You don't want this output to be 'https://...'. That's bad. You want it to say 'git@github.com:...'.

- 