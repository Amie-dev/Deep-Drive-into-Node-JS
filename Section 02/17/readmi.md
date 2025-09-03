
# 🟢 Node.js Installation Guide

Node.js allows you to run JavaScript outside the browser and build powerful server-side applications.  
Follow the steps below to install Node.js on your system.

---

## 📌 Step 1: Check if Node.js is Already Installed

Open your terminal or command prompt and run:

```bash
node -v
````

If Node.js is installed, this will display the version (e.g., `v20.5.0`).
If not, continue with the installation steps.

---

## 📌 Step 2: Download Node.js

1. Go to the official Node.js website: [https://nodejs.org](https://nodejs.org)
2. You’ll see two versions:

   * **LTS (Long Term Support)** → Recommended for most users (stable).
   * **Current** → Latest features, may not be fully stable.
3. Download the installer for your operating system.

---

## 📌 Step 3: Install on Your Operating System

### 🖥️ Windows

1. Run the downloaded `.msi` installer.
2. Follow the setup wizard and keep default options.
3. Check **"Add to PATH"** during installation.
4. Finish and verify with:

   ```bash
   node -v
   npm -v
   ```

### 💻 macOS

1. Download the `.pkg` installer from [nodejs.org](https://nodejs.org).
2. Run the installer and follow instructions.
3. Verify installation:

   ```bash
   node -v
   npm -v
   ```

✅ Alternatively, install using **Homebrew**:

```bash
brew install node
```

### 🐧 Linux (Debian/Ubuntu)

Update package index and install Node.js with npm:

```bash
sudo apt update
sudo apt install nodejs npm -y
```

Check versions:

```bash
node -v
npm -v
```

For the latest version, use **Node Version Manager (nvm)**.

---

## 📌 Step 4: Install Node.js via NVM (Recommended)

**NVM** (Node Version Manager) lets you install and switch between multiple Node.js versions easily.

### Install NVM (Linux/macOS)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Reload terminal:

```bash
source ~/.bashrc
```

Install Node.js:

```bash
nvm install --lts
nvm use --lts
```

Check:

```bash
node -v
npm -v
```

### Windows (nvm-windows)

1. Download [nvm for Windows](https://github.com/coreybutler/nvm-windows).
2. Install and then run:

   ```bash
   nvm install lts
   nvm use lts
   ```

---

## 📌 Step 5: Verify Installation

Run:

```bash
node -v
npm -v
```

You should see version numbers, meaning Node.js and npm are installed correctly.

---

## 🎯 Conclusion

Now you have Node.js installed! 🎉
You can start building applications and manage packages using **npm** or **yarn**.

👉 Next step: Try creating your first simple Node.js program:

```bash
echo "console.log('Hello, Node.js!')" > app.js
node app.js
```

Do you want me to also make a **separate `.md` with only quick commands (cheat sheet style)** for fast installation?
