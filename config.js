module.exports = { 
  cookieSecret: 'safQ$#%RawerW$Qfawer34wtw3%56r&^4%6sfsrYJR^e5$w$q#@Q1#tJyUo:>o:&(W%$Sdf', 
  cookieSecretExt: 'saaQ$#%RawerW$Qfa@5rq4wtw3%56r&^4%6sfsrYJR^e5$w$q#@W1#tJyUo:>o:&$W%$Sdf', 
  outerSecrets: ['yiyang_jiuzhou_20150118'], 
  defaultPwd: '123456', 
  defaultHash: '$2a$10$PWfht.vYnAgvUuSjB4sk2emJuLJQ6Up0I99pedaM.LbArEA7HkUKi', 
  bulkInsertBatch: 1000, 
  sessionExpiration: 1000 * 60 * 60 * 24 * 30, 
  SALT_WORK_FACTOR: 10, 
  TOKEN_EXPIRATION: 60 * 60, 
  resetPwdTOKEN_EXPIRATION: 60 * 1, 
  SMS_EXPIRATION: 2, 
  SMS_TOKEN: '12c6e31e0d52d786c14618ef3f1a6a9d', 
  SMS_AppId: 'ba5c1d767f0b4085b51718c4d2fe2580', 
  SMS_AccId: '4dcaa487b11dbbf7a5751f3a3c919a3d', 
  SMS_TPLId: '9222', 
  SMS_Secret: '$2a$10$PWfht.vYnAgvUuSjB4jk2emJuaJQ6Up0I99pedaM.LbArEA7HkUKi',
  OPEN_LIST_API: {
    '8e22078dc5069fdbcddaebfcc53173fd': {
        apiname: 'keb',
        API_TOKEN: '217785db95c311addcf0ddeb177f4ed5'
      },
  },
  delayWhenFailLogin: 300000, 
  bodyParserJSONLimit: 10240000, 
  projPath: '../', 
  relPath: 'yiyangbao', 
  dbUri: 'mongodb://localhost:27017/mongodb', 
  redisHOST: '127.0.0.1', 
  articlePerPage: 5, 
  activityPerPage: 5,
  commodityPerPage: 5,
  YLJ_CYCLE_DAY: 365,
  YLJ_YEAR_INTEREST: 25,
  postTypes: [ 
    { title: '文章', actions: [] },
    { title: '活动', actions: ['common', 'onCNPC'] },
    { title: '商品', actions: ['cart'] },
  ],
  pwdQuestions: [ 
    ['父亲名字',
    '母亲名字',
    '配偶名字',
    '小孩名字',
    '父亲生日',
    '母亲生日',
    '配偶生日',
    '小孩生日'],
    ['最喜欢的颜色',
    '小学名称',
    '最喜欢的演员'],
    ['最喜欢的歌曲',
    '初中名称',
    '最喜欢的宠物']
  ],
  Access_Control_Allow_Origin: ['http://localhost', 'http://10.12.43.168', 'http://127.0.0.1:8020', 'http://192.168.1.105:80', 'http://192.168.1.105'], 
  postAdvisor: 0,
  commentAdvisor: 0, 
  multerFieldSize: 100, 
  fileSizeLimit: 2048000, 
  multerFiles: 10, 
  multerFields: 10, 
  thumbWidth: 200, 
  ccapLenth: 4, 
  ccapFont: 30, 
  ccapNum: 1, 
  userLeveldown: 6, 
  userLevelinterval: 6,
  userLeveloffset: 2, 
  KindEditor: {
  	Up: 'KindEditor/upload'
  },
  UEditor: { 
    Up: 'UEditor/upload'
  }
};