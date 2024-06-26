# NMIXX Introduction

## 概要

NMIXXメンバーを紹介するSPAアプリケーション

## 利用技術

- React（SPA）
- TypeScript
- Vite（ビルドツール）

## 画面設計

| Page         | Path                  |
| ------------ | --------------------- |
| TOPページ    | `/`                   |
| メンバー一覧 | `/members`            |
| メンバー詳細 | `/members/:member_id` |

## デザイン設計

CSS
`styledーcomponents` を用いた `CSS-In-JS`を採用

## コンポーネント設計

Atomic Designを用いたコンポーネント管理とする

### Atoms

- `<ProfileIcon />`

### Molecules

- `<Member />`
- `<PrevButton />`
- `<TopButton />`

### Organisms

- `<Members />`
- `<GroupIntroduction />`

### Templates

- `<Home />`

## ページデザイン（作成中）

### TOPページ

![TOPページ](https://github.com/PenPeen/react_spa_nmixx_Introduction/blob/image/public/top_page.png?raw=true)

### メンバー一覧ページ

![メンバー一覧ページ](https://github.com/PenPeen/react_spa_nmixx_Introduction/blob/image/public/members_page.png?raw=true)

### メンバー詳細ページ

![メンバー一覧ページ](https://github.com/PenPeen/react_spa_nmixx_Introduction/blob/image/public/member_page.png?raw=true)

### ４０４ページ

![メンバー一覧ページ](https://github.com/PenPeen/react_spa_nmixx_Introduction/blob/image/public/404_page.png?raw=true)
