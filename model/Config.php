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
     * @param bool $type true is information, false is error
     * @param string $message
     * @return string html notification
     */
    static function alert(bool $type, string $message): string
    {
        return $type ? '<div class="notification is-success is-light"><button class="delete"></button>' . $message . '</div>' : '<div class="notification is-danger is-light"><button class="delete"></button>' . $message . '</div>';
    }
}
