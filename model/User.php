<?php
class User
{
    private $userid;
    private $name;
    private $password;
    private $email;
    private $comment;
    private $img;
    private $is_official;
    function __construct(string $userid, string $name, string $password, int $is_official = 0, string $email = NULL, string $comment  = NULL, string $img  = NULL)
    {
        $this->userid = $userid;
        $this->name = $name;
        $this->password = $password;
        $this->email = $email;
        $this->comment = $comment;
        $this->img = $img;
        $this->is_official = $is_official;
    }

    function register()
    {
        $flag = 1;
        try {
            $db = new SQLite3(__DIR__ . '/sample.db'); //相対パスでええのか
            $db->enableExceptions(true);
            $stmt = $db->prepare("INSERT INTO users VALUES(:userid, :name, :password, :email, :comment, :img, :is_official)");
            $stmt->bindParam(':userid', $this->userid);
            $stmt->bindParam(':name', $this->name);
            $stmt->bindParam(':password', $this->password);
            $stmt->bindParam(':email', $this->email);
            $stmt->bindParam(':comment', $this->comment);
            $stmt->bindParam(':img', $this->img);
            $stmt->bindParam(':is_official', $this->is_official);
            $stmt->execute();
        } catch (Exception $e) {
            $flag = Config::errorType($e);
        } finally {
            $db->close();
        }
        return $flag;
    }

    function update()
    {
    }

    static function all()
    {
        $rows = [];
        try {
            $db = new SQLite3(__DIR__ . '/sample.db');
            $result = $db->query("SELECT * FROM users");
            while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
                $rows[] = $row;
            }
            $result->finalize();
        } catch (Exception $e) {
            $e->getMessage();
        } finally {
            $db->close();
        }
        return $rows;
    }
    static function auth(string $usreid, string $password)
    {
    }
}