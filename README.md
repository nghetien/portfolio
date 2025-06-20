### Running the Project

Next, copy the development version of the `env` file:

```
cp ./apps/tiennghe.com/env.example ./apps/tiennghe.com/env.local
```

```
pnpm install
```

Finally, run the project:

```
pnpm dev
```

Now, your project should be up and running smoothly!

### Git Clone

```
git clone https://nghetien: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@github.com/nghetien/portfolio
```


### Install Docker

```
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo apt install docker-compose
```

### Deploy

```
docker-compose up -d

# Stop containers hiện tại
docker-compose down

# Build và start với nginx
docker-compose up -d --build

# Check services đang chạy
docker-compose ps
```
