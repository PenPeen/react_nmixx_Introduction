import type { Member } from '@/domains';

export const members: Member[] = [
  {
    id: 1,
    name: 'LILY',
    age: 21,
    position: 'メインボーカル',
    comment:
      'パワフルな歌声でグループを牽引する存在。デビュー前から注目されていた実力派。',
    profile_img_path: '/lily_profile.jpg',
  },
  {
    id: 2,
    name: 'HAEWON',
    age: 21,
    position: 'リーダー/メインボーカル/リードダンサー',
    comment:
      'グループのリーダーとして、抜群のカリスマ性と安定したボーカルで皆をまとめる。',
    profile_img_path: '/haewon_profile.jpg',
  },
  {
    id: 3,
    name: 'SULLYOON',
    age: 20,
    position: 'リードボーカル',
    comment:
      '透き通るような歌声で多くのファンを魅了する存在。多くのオーディションを勝ち抜いた逸材。',
    profile_img_path: '/sullyoon_profile.jpeg',
  },
  {
    id: 4,
    name: 'BAE',
    age: 19,
    position: 'リードダンサー/サブボーカル',
    comment:
      'スカウトでJYPに入社し、持ち前のダンススキルでグループを引っ張るエネルギッシュなメンバー。',
    profile_img_path: '/bae_profile.jpg',
  },
  {
    id: 5,
    name: 'JIWOO',
    age: 19,
    position: 'メインラッパー/メインダンサー/サブボーカル',
    comment: '多才なパフォーマーで、ラップからダンスまで幅広くこなす実力者。',
    profile_img_path: '/jiwoo_profile.jpg',
  },
  {
    id: 6,
    name: 'KYUJIN',
    age: 17,
    position: 'メインダンサー/リードラッパー/リードボーカル',
    comment:
      '若さと才能を兼ね備えたメンバー。ダンスで魅了し、ラップとボーカルもこなすオールラウンダー。',
    profile_img_path: '/kyujin_profile.jpg',
  },
];
