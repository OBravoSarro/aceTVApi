export interface ChannelResponse {
  image: string;
  label: string;
  hd: string[];
  fhd: string[];
  unknown: string[];
}

export const IMAGE_MAP: { [key: string]: string } = {
  DAZN: 'https://lh4.googleusercontent.com/dbzvQbM42Z6PrGdTrj652UrPxJor7CbNrwwNEvuyiW3Chz7jzB9d1XzfzstdIe5AnWVm9go-Of2vhAT9-uzNJlsWDNaKAo9dlsBp8qjcmrSrl51ndlx5dF-Dq72Oir0j8Q=w1280',
  'Dazn F1':
    'https://lh6.googleusercontent.com/0VxlayUSUFd2P-bXgPsGWSA9GCC_yaAVC4Dl0Ceq9wOCQs0btL7sksP3tgqSIE2PXfjrNjlQLXRpApc0o5U4EQ9Dm6Yj3g0IuLs804SvwivtrnnInVS-gvz6jr1IxhwJeQ=w1280',
  RFEF: 'https://lh5.googleusercontent.com/OOvJohU77Nd7ffCnwix-7HumryrUOxuCPT4ax4jF7StyXt7BMjGV5F-s18l4SinPmQX6QsSzmk6jMHmccJO9ZLq3HHE8NVOAL2FnjE0wbtwkFoicTPwaFRNdbXXMYXF0Sg=w1280',
  'F1 TV':
    'https://lh5.googleusercontent.com/ECai7JP0fURyo4qUh0A8NL8Oai2vN4tUtJ6EOKufuGUNUn-JlTbQ0nFq_dg2PwcfTh3Qz-6MhTXnX7Qlrm1-wlY-e5XVKHxTTIsG05Ty2Elhvj1J5BXjRxswdGb740xYFg=w1280',
  'LaLiga TV Bar':
    'https://lh3.googleusercontent.com/De58kt20FCSShMkZJ37OQ7ducAZARv32NxTGmBpgyYTUmPbVb4z8H53mH1fUHeo-L9-TTExdjHfmJ5TrMPNDjmDmlM2LJEG91AdEVOi_S0cERKlbav7cata_YkMp7IYDmA=w1280',
  'M. LaLiga':
    'https://lh4.googleusercontent.com/k3MFNS_tyaGZlngIADJOiiB3oWIAMTqZc9lV_nvubK9P6sgNsQm5pb0LsLEplLsNtfD5gtmW3cwS1FtFIPiVQ4g83tuZiQmbKGrv8niUgbWWmnydzILbrC7IRzO9ykn3rg=w1280',
  'LaLiga Hypermotion':
    'https://lh4.googleusercontent.com/RL8nehwhtUYABrqebDcp4NkcJsJ6wWCgee_z7hhOBqwnVUzXtdloYlqVMz7CFZHD8DW8jIqeP5-7r66BXsyR51PosPg0F3wmDGyDQ9Hvs7QBwdWE3IH7-DqCzBroM2L_ZA=w1280',
  'M.#Vamos':
    'https://lh6.googleusercontent.com/adw4lLLJGZ_SexJfOQcRTsVxzHOBdnf9d5acjLNKbIFv8gOAk6Y0KHhZXLnTMe-Cd1cY-D0tl-IYjXjydLHkpi5enk8hAEog2nV-lflSx_ht26yrh86LEDeKxieoObBzVg=w1280',
  'M.Ellas':
    'https://lh6.googleusercontent.com/adw4lLLJGZ_SexJfOQcRTsVxzHOBdnf9d5acjLNKbIFv8gOAk6Y0KHhZXLnTMe-Cd1cY-D0tl-IYjXjydLHkpi5enk8hAEog2nV-lflSx_ht26yrh86LEDeKxieoObBzVg=w1280',
  'Movistar Plus':
    'https://lh6.googleusercontent.com/adw4lLLJGZ_SexJfOQcRTsVxzHOBdnf9d5acjLNKbIFv8gOAk6Y0KHhZXLnTMe-Cd1cY-D0tl-IYjXjydLHkpi5enk8hAEog2nV-lflSx_ht26yrh86LEDeKxieoObBzVg=w1280',
  'M. Deportes':
    'https://lh5.googleusercontent.com/EfQ5ViQtnhIsrPHC7a0V37qoEH0oh6noFHQZXM0STm0NgbmbmSK-xSK9PMg68ji984OB4XNCj9Zg9KaCOk97IkhzfUD9g6xKz3cbFhm8BW8QZcb4gBKi3bBJMd1JzXWP-Q=w1280',
  'M.L. Campeones':
    'https://lh6.googleusercontent.com/Nsc22qsrEUQmq8gasjFbYuZG5DQEpMuhNV6hYre24CdMnN2xM4-ksrse1wKWOKoKBnkoc4IELIQIpSgrgay8EGmHBYeOpC95fS05QQu2c3-IeEGKPFZUe01iyYgM1kCRLw=w1280',
  'M. Golf':
    'https://lh3.googleusercontent.com/KDZwUPzWkKFmddfvpRztRsHFiPMKRnemfK2FPE5XdSs4StUUkAd_DPaFDNf0xIIlESmkyDuCJpdRQZ4Sjn_pVLY35mlbr97peTuAlnWRnHprRp1nA7Dm7WpSg2QuFkEDpQ=w1280',
  'Tennis Channel':
    'https://lh3.googleusercontent.com/uuOOk93tnV0BfY6aYfuGBuoH6TqavTgf-NmOH1GqAigV2nbAxe4gBvpO1lLgdxRSEQnPcr1PaxChnIXAAn9DEO65hzKXgHE932oyHseZ7Ad1NVuSZnRIzZ78j3qY8bRpZQ=w1280',
  EuroSport:
    'https://lh5.googleusercontent.com/6j_egEr1H7mS5NPrcHd0NqcFc-7M5y-yh8PJbrRNLG5nenc6VIx67dY5XcaF3N4jEM_SZtfdmvQNE8Ff79ERZA0rlaUAahGSTUD3Cpa4nxwPAP0Mu_3YZpCUKLzlkcEOrw=w1280',
  tdp: 'https://lh6.googleusercontent.com/k11tQdYCAswwP3vZbqIbc9EFtl9kyT9EIe5yt0AZ-oOSVFNLm0kTu3FKDacPBaZ0fp5EAGEr3CEJiwECOaluPEGVk_amUK7P4PX_qqioLW4hXSsxQNhs0eYZi3FgnVEicg=w1280',
  'LA 1':
    'https://lh4.googleusercontent.com/SrgwdKKPdrp3mUBMVyaWtl6mnOf4_0nerJb0j9QgxciXzjR2YoUzsYUPfSfg-ctARqjyHLumEit9t7utB9swGxXJeCUXzmydoXXWsixxQRu7JeQdnvntpBHlSsoCRPU2uw=w1280',
  'Real Madrid TV':
    'https://lh4.googleusercontent.com/RxbBg8H1d8sAbvjKwKI516XcjdDgyGmtJ4UYAH5I4rWtRAgNQpf05WOhR-pMAdNSSrrOS5bVcjqcy86xunql5NgDYJk9pfttwm3FmWbSOBvccShdJvnrydAjaXrfW13aoQ=w1280',
  MundoToro:
    'https://lh5.googleusercontent.com/Q4co0_3Gt1rLv0E1-us1MxMGMiBewm5F4uvS_60A2qKrsrQtcSCeE4pHsQkI_bYHEof-Sck64WufoyQKN9lG4qfFaK2mXGZToW4t4YwlHoTBB22zMYCBtu8z7jA0h56Imw=w1280',
};
