FROM tomcat

# deleting default files
RUN rm -rf /usr/local/tomcat/webapps/ROOT/*
RUN apt-get update
# following commented line is currentlt not working
# RUN apt-get install libmysql-java -y
ENV TZ=Asia/Kolkata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# copying src files to web root
COPY src/* /usr/local/tomcat/webapps/ROOT/
COPY tomcat-users.xml /usr/local/tomcat/conf/