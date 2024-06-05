export enum LocalStorage{
    AccessToken = 'access-token',
    RefreshToken = 'refresh-token'
}

export enum ApiRoutes {
    login = '/user/loginadmin',
    logout = '/user/logout' , 
    updateUser = '/user/update-user' , 
    Refresh= '/auth/refresh',
    UserInfo = '/user/one-user',
    Users = '/users',
    register='/user/signup',
    confirmEmail='/email-confirmation/confirm',
    resetPasssend='/reset/send',
    updatePassword='/reset/changepassword',
    loginWithFb='/auth/facebook',
    search='/users/search',
    avatar='/users/avatar',
    getUserPic='/local-files/',
    slider='/home/slider',
    rdv='/rdv/'
 }