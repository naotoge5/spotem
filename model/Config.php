<?php
class Config
{
    static function errorType(Exception $e)
    {
        $message = $e->getMessage();
        if (isset($message)) {
            if (strpos($message, 'UNIQUE') === false) {
                return 0;
            } else {
                return -1;
            }
        }
    }

    /**
     * Undocumented function
     *
     * @param string $url
     * @return string|false
     */
    static function getUnique(string $url)
    {
        $result = false;
        $box = parse_url($url, PHP_URL_QUERY);
        parse_str($box, $arr);
        try {
            $result = $arr['unique'];
        } catch (Exception $e) {
        }
        return $result;
    }
}
