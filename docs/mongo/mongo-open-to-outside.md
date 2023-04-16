---
# sidebar_position: 2
tags: ["backend", "database", "mongodb"]
last_update:
  date: 2023/4/16
  author: Kevin Hu
---

# MongoDB 對外開放設定

:::note 動機

最近在本地端架了一台 Mongo，但是需要由外部服務來存取資料
但預設 Mongo 是沒有對外開放，因此來紀錄一下我設定的步驟

:::

## Step1. 安裝 MongoDB

[從官網安裝 MongoDB Community Edition](https://docs.mongodb.com/manual/administration/install-community/)

## Step2. 修改 `mongod` 設定檔

:::info 檔案位置

Windows: `C:\Program Files\MongoDB\Server\5.0\bin`

Linux: `/etc/mongod.conf`

:::

修改以下區域

```yaml {4,8} showLineNumbers
# network interface 區域
net:
	port: 27017
	bindIp: 0.0.0.0

# security 區域
security:
  authorization: "enabled"
```

## Step3. 新增 Mongo 管理者帳號

在 terminal 輸入 `mongo` 進入 Mongo CLI
接著輸入以下命令

```js showLineNumbers
use admin
db.createUser(
	{
		user: "Admin",
		pwd: "myNewPassword",
		roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
	}
)
```

## Step4. 重啟 Mongo 服務

### Windows

打開工作管理員 => 選擇服務找到 `MongoDB` => 右鍵重新啟動

<!-- <img src="/assets/mongo-service.png"> -->

### Linux

`sudo service mongod restart`
