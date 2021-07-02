<?php
require_once 'Config.php';

class User
{
    private $id;
    private $userid;
    private $name;
    private $password;
    private $email;
    private $comment;
    private $image;
    private $is_official;

    function __construct(string $userid, string $name)
    {
        $this->userid = $userid;
        $this->name = $name;
        //ather
        $this->id = null;
        $this->password = null;
        $this->email = null;
        $this->comment = null;
        $this->image = null;
        $this->is_official = 0;
    }

    function setIsOfficial(bool $is_official)
    {
        $this->is_official = $is_official;
        return $this;
    }
    function setEmail($email)
    {
        $this->email = $email;
        return $this;
    }
    function setComment($comment)
    {
        $this->comment = $comment;
        return $this;
    }
    function setImage($image)
    {
        $this->image = $image;
        return $this;
    }

    function getName()
    {
        return $this->name;
    }
    /**
     * Undocumented function
     * @deprecated パスワードはオブジェクトに保存されません
     *
     * @return null
     */
    function getPassword()
    {
        return $this->password;
    }

    function getIsOfficial()
    {
        return $this->is_official;
    }




    function register($password)
    {
        $hash_password = password_hash($password, PASSWORD_DEFAULT);
        $flag = 1;
        try {
            $db = new SQLite3(__DIR__ . '/../assets/db/spotem.db'); //相対パスでええのか
            $db->enableExceptions(true);
            $stmt = $db->prepare("INSERT INTO users VALUES(null, :userid, :name, :password, :email, :comment, :image, :is_official)");
            $stmt->bindParam(':userid', $this->userid);
            $stmt->bindParam(':name', $this->name);
            $stmt->bindParam(':password', $hash_password);
            $stmt->bindParam(':email', $this->email);
            $stmt->bindParam(':comment', $this->comment);
            $stmt->bindParam(':image', $this->image);
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
    /**
     * Undocumented function
     * @deprecated 未実装
     *
     * @return array[user]
     */
    static function findAll()
    {
        $rows = [];
        try {
            $db = new SQLite3(__DIR__ . '/../assets/db/spotem.db');
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
    /**
     * Undocumented function
     *
     * @param string|int $key id or userid
     * 
     * @return user|false
     */
    static function get($key)
    {
        try {
            $db = new SQLite3(__DIR__ . '/../assets/db/spotem.db'); //相対パスでええのか
            $db->enableExceptions(true);
            $stmt = $db->prepare("SELECT * FROM users WHERE userid = :key OR id = :key");
            $stmt->bindParam(':key', $key);
            $result = $stmt->execute();
            $row = $result->fetchArray(SQLITE3_ASSOC);
            if ($row) {
                $user = new User($row['userid'], $row['name'], $row['password']);
                $user->setEmail($row['email'])->setComment($row['comment'])->setImage($row['image'])->setIsOfficial($row['is_official']);
                $row = $user;
            }
        } catch (Exception $e) {
            $e->getMessage();
        } finally {
            $db->close();
        }
        return $row;
    }

    /**
     * Undocumented function
     * @deprecated 簡易ログイン
     *
     * @param string $usreid
     * @param string $password
     * @return bool 
     */
    static function auth(string $usreid, string $password)
    {
        try {
            $db = new SQLite3(__DIR__ . '/../assets/db/spotem.db'); //相対パスでええのか
            $db->enableExceptions(true);
            $stmt = $db->prepare("select count(*) from users where userid = :userid and password = :password");
            $stmt->bindParam(':userid', $usreid);
            $stmt->bindParam(':password', $password);
            $result = $stmt->execute();
            $data = $result->fetchArray(SQLITE3_ASSOC);
        } catch (Exception $e) {
        } finally {
            $db->close();
        }
        return $data;
    }

    /**
     * Undocumented function
     *
     * @param string $usreid
     * @param string $password
     * @return bool 
     * 
     */
    static function authSecure(string $usreid, string $password)
    {
        try {
            $db = new SQLite3(__DIR__ . '/../assets/db/spotem.db'); //相対パスでええのか
            $db->enableExceptions(true);
            $stmt = $db->prepare("select count(*) from users where userid = :userid and password = :password");
            $stmt->bindParam(':userid', $usreid);
            $stmt->bindParam(':password', $password);
            $result = $stmt->execute();
            $data = $result->fetchArray(SQLITE3_ASSOC);
        } catch (Exception $e) {
        } finally {
            $db->close();
        }
        return $data;
        /*
        if (password_verify($_POST['password'], $row['password'])) {
            session_regenerate_id(true); //session_idを新しく生成し、置き換える
            $_SESSION['EMAIL'] = $row['email'];
            echo 'ログインしました';
        } else {
            echo 'メールアドレス又はパスワードが間違っています。';
            return false;
        }*/
    }
}
