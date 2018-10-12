FROM node:8.9
MAINTAINER Alex Moreno <alex.moreno.costa@gmail.com>
EXPOSE 4200
RUN npm install -g @angular/cli
RUN mkdir -p /var/www
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT ["ng serve"]
