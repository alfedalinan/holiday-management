const SUCCESS_MESSAGE = {
    HOLIDAY_SAVE: 'Successfully saved holiday from user meta',
    HOLIDAY_UNSAVE: 'Successfully removed holiday from user meta'
};

const NO_OP_MESSAGE = {
    HOLIDAY_SAVE: 'Holiday already exists in the current user meta',
    HOLIDAY_UNSAVE: 'Holiday does not exists in the current user meta'
}

module.exports = {
    SUCCESS_MESSAGE,
    NO_OP_MESSAGE
}