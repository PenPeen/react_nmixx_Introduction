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

### Organisms

- `<Members />`
- `<GroupIntroduction />`

### Templates

- `<MembersFrame />`
