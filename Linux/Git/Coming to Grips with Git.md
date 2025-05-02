
## Understanding Git
> Git is a distributed version control system that tracks versions of files. It is often used to control source code by programmers who are developing software collaboratively.

[[What is Git]] → Conceptual explanation  
[[Why Use Git]] → Benefits / use cases

---

## Quick Commands

| Command      | Purpose                                         |
|--------------|-------------------------------------------------|
| `git init`   | Initialize a repo                               |
| `git add`    | Stage changes                                   |
| `git commit` | Commit with message (`-m "msg"`)                |
| `git push`   | Push to remote like GitHub                      |
| `git pull`   | Fetch and merge from remote                     |
| `git status` | View current changes                            |
| `git log`    | Show commit history                             |

🔗 See: [[Common Git Commands Explained]]

---

## Related How-Tos

- 🔐 [[Setting Up SSH for GitHub]]
- 🔁 [[Cloning and Working with Remote Repos]]
- 📦 [[Using GitHub with Obsidian]]
- ☁️ [[Backing Up Your Vault with Git]]
- 💥 [[Fixing Broken Remotes]]
- 🔄 [[Syncing Between Devices with Git]]

---

## Troubleshooting
> Git acting like a little gremlin?

- [[SSH Key Not Working]]
- [[Permission Denied (Publickey)]]
- [[Remote Already Exists]]

---

## Useful Snippets

```bash
# Fix a remote
git remote set-url origin git@github.com:you/repo.git

# Stage and commit everything
git add . && git commit -m "msg" && git push