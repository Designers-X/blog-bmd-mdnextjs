dir="./.git";
if [ ! -d "$dir" ] 
then
  echo -e "No Version Control History Found. Initializing the Current Directory \n";
git init;
flag=1;
else
  echo -e "\nVersion control history found. \n";
fi
echo -e "\nAdding Files to Push\n";
git add -A;
echo -e "\nPrinting Git Status \n";
git status;
echo -e "\nCan I confirm the push boss (y/n) ?";
read user_input;
echo;
if [ `echo $user_input | grep -iw y` ]
then
 echo -e "\nEnter the commit message";
 read commit_message;
 echo;
git commit -m "$commit_message";
if [ $flag -eq 1 ]
 then
  echo -e "\nEnter the remote git url";
  read git_url;
  read name;
  git remote add $name $git_url;
 fi
 read branch
 git checkout -b $branch
git pull Vercel $branch;
echo -e "\npushing to $branch devT \n";
git push Vercel $branch;
if [ $? -eq 0 ];
 then
    echo -e "\nGit push was successful\n";
 else
  echo -e "\nGit push failed!.\n";
 fi
else
 echo -e "\nWrong command. Git push stopped. \n";
fi
 ;;
*)
  echo -e "\nInvalid choice \n";
 ;;
esac