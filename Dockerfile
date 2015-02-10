FROM centos:centos6
MAINTAINER drewzh <me@drewzh.com>
# Enable EPEL for Node.js
RUN rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
# Install Node.js and npm
RUN yum install -y nodejs npm
# Bundle app source
COPY ./dist /src
# Expose app on port
EXPOSE 8080
# Execute application
CMD ["node", "/src/test_app/index.js"]
