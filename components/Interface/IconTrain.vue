<template>
    <span>
        {{ idle}}
        <span v-if="type == 'Tank' && fully">
            <svg width="60" height="35" viewBox="0 0 60 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.05884 31.0157L5.30054 27.3954H24.9535L22.7124 31.0157H8.05884Z" fill="#E8E6ED" stroke="#B1ADC2"/>
                <path d="M37.7498 30.8339L34.9915 27.2135H54.6444L52.4033 30.8339H37.7498Z" fill="#E8E6ED" stroke="#B1ADC2"/>
                <circle cx="11.0303" cy="31.5" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="40.7212" cy="31.318" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="19.2236" cy="31.5" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="48.9146" cy="31.318" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <rect x="18.2014" y="31.0159" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="47.8923" y="30.8339" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="10.0083" y="31.0159" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="39.6992" y="30.8339" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="2.90942" y="25.1626" width="54.1947" height="3.18713" fill="#E8E6ED" stroke="#B1ADC2"/>
                <rect x="23.6926" y="4.02466" width="12.5083" height="2.50012" fill="#E8E6ED" stroke="#B1ADC2"/>
                <rect x="13.1204" y="4.83508" width="3.57275" height="2.1897" fill="#B1ADC2"/>
                <rect x="43.1995" y="4.60547" width="3.57275" height="2.1897" fill="#B1ADC2"/>
                <rect x="4.86255" y="6.42993" width="50.2886" height="18.7327" rx="4.5" :fill="color" stroke="#B1ADC2"/>
                <rect width="34" height="1" transform="translate(14.3123 13.5)" fill="#B1ADC2"/>
                <rect width="34" height="2" transform="translate(14.3123 16.5)" fill="#B1ADC2"/>
            </svg>
        </span>

        <span v-if="type == 'Tank' && !fully">
            <svg width="60" height="35" viewBox="0 0 60 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.052 31.0157L5.2937 27.3954H24.9467L22.7055 31.0157H8.052Z" fill="#E8E6ED" stroke="#B1ADC2"/>
                <path d="M37.7429 30.8339L34.9846 27.2135H54.6376L52.3965 30.8339H37.7429Z" fill="#E8E6ED" stroke="#B1ADC2"/>
                <circle cx="11.0234" cy="31.5" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="40.7144" cy="31.318" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="19.2168" cy="31.5" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="48.9077" cy="31.318" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <rect x="18.1946" y="31.0159" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="47.8855" y="30.8339" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="10.0015" y="31.0159" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="39.6924" y="30.8339" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="2.90259" y="25.1626" width="54.1947" height="3.18713" fill="#E8E6ED" stroke="#B1ADC2"/>
                <rect x="23.6858" y="4.02466" width="12.5083" height="2.50012" fill="#E8E6ED" stroke="#B1ADC2"/>
                <rect x="13.1135" y="4.83508" width="3.57275" height="2.1897" fill="#B1ADC2"/>
                <rect x="43.1926" y="4.60547" width="3.57275" height="2.1897" fill="#B1ADC2"/>
                <rect x="4.85571" y="6.42993" width="50.2886" height="18.7327" rx="4.5" :fill="color" stroke="#B1ADC2"/>
            </svg>
        </span>

        <span v-if="type == 'RollPlatform' && fully">
            <svg width="60" height="36" viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4.9646" y="15.5249" width="50.921" height="9.63171" :fill="color" stroke="#B1ADC2"/>
                <path d="M8.05884 31.0962L5.30054 27.4758H24.9535L22.7124 31.0962H8.05884Z" fill="#E8E6ED" stroke="#B1ADC2"/>
                <path d="M37.7498 30.9143L34.9915 27.2939H54.6444L52.4033 30.9143H37.7498Z" fill="#E8E6ED" stroke="#B1ADC2"/>
                <circle cx="11.0305" cy="31.5804" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="40.7214" cy="31.3984" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="19.2239" cy="31.5804" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="48.9143" cy="31.3984" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <rect x="18.2014" y="31.0963" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="47.8923" y="30.9143" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="10.0081" y="31.0963" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="39.699" y="30.9143" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="2.90942" y="25.243" width="54.1947" height="3.18713" fill="#E8E6ED" stroke="#B1ADC2"/>
                <circle cx="15.0305" cy="24.5804" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <rect x="14.0081" y="24.0963" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <circle cx="29.7214" cy="24.3984" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <rect x="28.699" y="23.9143" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <circle cx="44.9143" cy="24.3984" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <rect x="43.8923" y="23.9143" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect width="30" height="2" transform="translate(15.1262 17.5804)" fill="#B1ADC2"/>
            </svg>
        </span>

        <span v-if="type == 'RollPlatform' && !fully">
            <svg width="60" height="36" viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4.9646" y="15.4829" width="50.921" height="9.63171" :fill="color" stroke="#B1ADC2"/>
                <path d="M8.05884 31.0542L5.30054 27.4338H24.9535L22.7124 31.0542H8.05884Z" fill="#E8E6ED" stroke="#B1ADC2"/>
                <path d="M37.7498 30.8723L34.9915 27.252H54.6444L52.4033 30.8723H37.7498Z" fill="#E8E6ED" stroke="#B1ADC2"/>
                <circle cx="11.0305" cy="31.5385" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="40.7214" cy="31.3564" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="19.2239" cy="31.5385" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="48.9143" cy="31.3564" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <rect x="18.2014" y="31.0543" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="47.8923" y="30.8723" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="10.0081" y="31.0543" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="39.699" y="30.8723" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="2.90942" y="25.201" width="54.1947" height="3.18713" fill="#E8E6ED" stroke="#B1ADC2"/>
                <circle cx="15.0305" cy="24.5385" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <rect x="14.0081" y="24.0543" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <circle cx="29.7214" cy="24.3564" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <rect x="28.699" y="23.8723" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <circle cx="44.9143" cy="24.3564" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <rect x="43.8923" y="23.8723" width="2.04443" height="0.968384" fill="#FFFFFF"/>
            </svg>
        </span>

        <span v-if="type == 'Hopper' && fully">
            <svg width="56" height="37" viewBox="0 0 56 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49.9445 8.23938C49.9445 9.05514 49.4655 9.90597 48.431 10.7486C47.4004 11.588 45.8787 12.3661 43.9541 13.0291C40.1098 14.3535 34.7665 15.1816 28.8411 15.1816C22.9157 15.1816 17.5725 14.3535 13.7281 13.0291C11.8035 12.3661 10.2818 11.588 9.25125 10.7486C8.21673 9.90597 7.73779 9.05514 7.73779 8.23938C7.73779 7.42362 8.21673 6.57279 9.25125 5.7302C10.2818 4.89079 11.8035 4.11265 13.7281 3.44964C17.5725 2.12528 22.9157 1.29712 28.8411 1.29712C34.7665 1.29712 40.1098 2.12528 43.9541 3.44964C45.8787 4.11265 47.4004 4.89079 48.431 5.7302C49.4655 6.57279 49.9445 7.42362 49.9445 8.23938Z" fill="#E8E6ED" stroke="#B1ADC2"/>
                <path d="M6.46143 32.0962L3.70312 28.4758H23.3561L21.115 32.0962H6.46143Z" fill="#E8E6ED" stroke="#B1ADC2"/>
                <path d="M36.1523 31.9143L33.394 28.2939H53.047L50.8059 31.9143H36.1523Z" fill="#E8E6ED" stroke="#B1ADC2"/>
                <circle cx="9.43311" cy="32.5804" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="39.124" cy="32.3984" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="17.6262" cy="32.5804" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="47.3171" cy="32.3984" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <rect x="16.604" y="32.0963" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="46.2949" y="31.9143" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="8.41064" y="32.0963" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="38.1016" y="31.9143" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="1.31201" y="26.243" width="54.1947" height="3.18713" fill="#E8E6ED" stroke="#B1ADC2"/>
                <rect x="9.89648" y="11.7739" width="14.6898" height="1.11673" transform="rotate(100.267 9.89648 11.7739)" fill="#B1ADC2"/>
                <path d="M6.79785 9.21655V5.72504H51.8382V9.21655H50.6744V12.1261H48.4631V23.9973C45.3983 24.5792 37.3601 25.743 29.7253 25.743C22.0905 25.743 13.354 24.5792 9.94009 23.9973V12.1261H7.7288V9.21655H6.79785Z" :fill="color" stroke="#B1ADC2"/>
                <rect width="14.2979" height="1.11673" transform="matrix(-0.178232 -0.983988 -0.983988 0.178232 52.2256 26.122)" fill="#B1ADC2"/>
                <rect width="34" height="1" transform="translate(12.7148 18.5804)" fill="#B1ADC2"/>
                <rect width="34" height="2" transform="translate(12.7148 21.5804)" fill="#B1ADC2"/>
            </svg>
        </span>

        <span v-if="type == 'Hopper' && !fully">
            <svg width="56" height="32" viewBox="0 0 56 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.45459 27.0962L3.69629 23.4758H23.3493L21.1081 27.0962H6.45459Z" fill="#E8E6ED" stroke="#B1ADC2"/>
                <path d="M36.1455 26.9143L33.3872 23.2939H53.0402L50.7991 26.9143H36.1455Z" fill="#E8E6ED" stroke="#B1ADC2"/>
                <circle cx="9.42627" cy="27.5804" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="39.1172" cy="27.3984" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="17.6194" cy="27.5804" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="47.3103" cy="27.3984" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <rect x="16.5972" y="27.0963" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="46.2881" y="26.9143" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="8.40381" y="27.0963" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="38.0947" y="26.9143" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="1.30518" y="21.243" width="54.1947" height="3.18713" fill="#E8E6ED" stroke="#B1ADC2"/>
                <rect x="9.88965" y="6.77386" width="14.6898" height="1.11673" transform="rotate(100.267 9.88965 6.77386)" fill="#B1ADC2"/>
                <path d="M6.79102 4.21655V0.725037H51.8314V4.21655H50.6675V7.12614H48.4562V18.9973C45.3915 19.5792 37.3532 20.743 29.7185 20.743C22.0837 20.743 13.3472 19.5792 9.93326 18.9973V7.12614H7.72197V4.21655H6.79102Z" :fill="color" stroke="#B1ADC2"/>
                <rect width="14.2979" height="1.11673" transform="matrix(-0.178232 -0.983988 -0.983988 0.178232 52.2188 21.122)" fill="#B1ADC2"/>
            </svg>
        </span>

        <span v-if="type == 'HalfCarriage' && fully">
            <svg width="60" height="37" viewBox="0 0 60 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M51.5353 8.23938C51.5353 9.05514 51.0563 9.90597 50.0218 10.7486C48.9912 11.588 47.4695 12.3661 45.545 13.0291C41.7006 14.3535 36.3573 15.1816 30.4319 15.1816C24.5065 15.1816 19.1633 14.3535 15.3189 13.0291C13.3944 12.3661 11.8727 11.588 10.8421 10.7486C9.80755 9.90597 9.32861 9.05514 9.32861 8.23938C9.32861 7.42362 9.80755 6.57279 10.8421 5.7302C11.8727 4.89079 13.3944 4.11265 15.3189 3.44964C19.1633 2.12528 24.5065 1.29712 30.4319 1.29712C36.3573 1.29712 41.7006 2.12528 45.545 3.44964C47.4695 4.11265 48.9912 4.89079 50.0218 5.7302C51.0563 6.57279 51.5353 7.42362 51.5353 8.23938Z" fill="#E8E6ED" stroke="#B1ADC2"/>
                <rect x="4.95801" y="5.91626" width="50.921" height="20.2404" :fill="color" stroke="#B1ADC2"/>
                <path d="M8.052 32.0962L5.2937 28.4758H24.9467L22.7055 32.0962H8.052Z" fill="#E8E6ED" stroke="#B1ADC2"/>
                <path d="M37.7429 31.9143L34.9846 28.2939H54.6376L52.3965 31.9143H37.7429Z" fill="#E8E6ED" stroke="#B1ADC2"/>
                <circle cx="11.0234" cy="32.5804" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="40.7144" cy="32.3984" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="19.2168" cy="32.5804" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="48.9077" cy="32.3984" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <rect x="18.1946" y="32.0963" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="47.8855" y="31.9143" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="10.0015" y="32.0963" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="39.6924" y="31.9143" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="2.90259" y="26.243" width="54.1947" height="3.18713" fill="#E8E6ED" stroke="#B1ADC2"/>
                <rect width="34" height="1" transform="translate(17.3052 18.5804)" fill="#B1ADC2"/>
                <rect width="34" height="2" transform="translate(17.3052 21.5804)" fill="#B1ADC2"/>
            </svg>
        </span>

        <span v-if="type == 'HalfCarriage' && !fully">
            <svg width="61" height="35" viewBox="0 0 61 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4.98096" y="4.83264" width="50.921" height="20.2404" :fill="color" stroke="#B1ADC2"/>
                <path d="M8.07495 31.0126L5.31665 27.3922H24.9696L22.7285 31.0126H8.07495Z" fill="#E8E6ED" stroke="#B1ADC2"/>
                <path d="M37.7659 30.8307L35.0076 27.2103H54.6605L52.4194 30.8307H37.7659Z" fill="#E8E6ED" stroke="#B1ADC2"/>
                <circle cx="11.0464" cy="31.4968" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="40.7373" cy="31.3148" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="19.2397" cy="31.4968" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <circle cx="48.9307" cy="31.3148" r="3" fill="#B1ADC2" stroke="#B1ADC2"/>
                <rect x="18.2175" y="31.0127" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="47.9084" y="30.8307" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="10.0244" y="31.0127" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="39.7153" y="30.8307" width="2.04443" height="0.968384" fill="#FFFFFF"/>
                <rect x="2.92554" y="25.1594" width="54.1947" height="3.18713" fill="#E8E6ED" stroke="#B1ADC2"/>
            </svg>
        </span>
    </span>
</template>


<script>
export default {
    props: {
        type: String,
        fully: Boolean,
        color: String,
        idle: Boolean,
    },
}
</script>
