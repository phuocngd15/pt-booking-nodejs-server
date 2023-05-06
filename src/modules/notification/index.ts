import push from 'web-push'
let vapidKeys= push.gen
const new push = push.g
// Public Key:
//     BGe2XDSUP375eQZURqLbbYB4ov5lYfLc3IeZYNa6IpVMlV4aR39fNel6RLDrxvh8DecVGSCbUG8CtYdVycB7L7I
//
// Private Key:
//     FmulV_P8HKTQoBwosE1ioY0oCSHoGPl5fFvMCAo6KGw
let vapidKeys={
    publicKey: 'BGe2XDSUP375eQZURqLbbYB4ov5lYfLc3IeZYNa6IpVMlV4aR39fNel6RLDrxvh8DecVGSCbUG8CtYdVycB7L7I',
    privteKey:'FmulV_P8HKTQoBwosE1ioY0oCSHoGPl5fFvMCAo6KGwFmulV_P8HKTQoBwosE1ioY0oCSHoGPl5fFvMCAo6KGw'
}

push.setVapidDetails('')